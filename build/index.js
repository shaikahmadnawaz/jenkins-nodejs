"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: "10mb" }));
app.use(express_1.default.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 }));
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to jenkins pipeline",
    });
});
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
exports.default = app;
