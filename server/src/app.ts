import express from "express";
import https   from "https";
import http    from "http";
import fs      from "fs";
import path    from "path";

import { env_config } from "./env_config";

import config_json from "../env-config.json";

const CONFIG: env_config = config_json;

// ---------------------------------

import { Calendar } from "./calendar";

const calendar: Calendar = new Calendar(CONFIG.google_config.service_account, CONFIG.google_config.event_calendar_id, true);

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

app.get("/api/GetEventsDateOfMonth", async (req, res) => {
    const month = req.body;

    try {
        const dates = await calendar.GetEventsDateOfMonth(month);

        res.status(200).json(dates);
    } catch (error) {
        console.log(`[Server] Error occured while fetching dates: ${error}\n`);

        res.status(500).json();
    }
});

app.get("/api/GetEventsOfSpan", async (req, res) => {
    const { startDate, endDate } = req.body;

    try {
        const events = await calendar.GetEventsOfSpan(new Date(startDate), new Date(endDate));

        res.status(200).json(events);
    } catch (error) {
        console.log(`[Server] Error occured while fetching events: ${error}\n`);

        res.status(500).json();
    }
});

app.get("/api/GetThreeFirstEvents", async (req, res) => {
    try {
        const events = await calendar.GetThreeFirstEvents();

        res.status(200).json(events);
    } catch (error) {
        console.log(`[Server] Error occured while fetching the first three events: ${error}\n`);

        res.status(500).json();
    }
});

app.use(express.static(CONFIG.resources_absolute_path)); // Make resources avaible!

server.listen(CONFIG.port, () => {
    console.log(`Server has begun listening: ${CONFIG.use_https ? "https" : "http"}://localhost:${CONFIG.port}`);
});