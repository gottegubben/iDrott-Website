import express from "express";
import https   from "https";
import http    from "http";
import fs      from "fs";
import path    from "path";

import { env_config } from "./old_env_config";

import config_json from "../env-config.json";

const CONFIG: env_config = config_json;

// ---------------------------------

import { Calendar } from "./old_calendar";

const calendar: Calendar = new Calendar(CONFIG.google_config.service_account, CONFIG.google_config.event_calendar_id);

calendar.GetEventsUpAhead().then(x => {
    x.forEach(a => console.log(Calendar.ConvertToViewModel(a)));
});



const app = express();

let server: https.Server | http.Server;

if(CONFIG.use_https) {
    const crypto_cfg = CONFIG.cryptography_config;

    const privateKey  = fs.readFileSync(path.join(crypto_cfg.folder_absolute_path, crypto_cfg.key_name), 'utf8');
    const certificate = fs.readFileSync(path.join(crypto_cfg.folder_absolute_path, crypto_cfg.certificate_name), 'utf8');
    
    const credentials = {
        key:  privateKey,
        cert: certificate
    };

    server = https.createServer(credentials, app);
}
else {
    server = http.createServer(app);
}

const albums: Array<string> = [];

fs.readdir(CONFIG.albums_absolute_path, (error, files) => {
    if(error) {
        console.log("Error occured when reading albums from disk: ", error.message);
    }
    else {
        files.forEach(file => {
            albums.push(file);
        });
    }
});

app.get("/api/GetAllAlbums", (req, res) => {
    res.json(albums);
});

app.use(express.static(CONFIG.resources_absolute_path)); // Make resources avaible!

server.listen(CONFIG.port, () => {
    console.log(`Server has begun listening: ${CONFIG.use_https ? "https" : "http"}://localhost:${CONFIG.port}`);
});

