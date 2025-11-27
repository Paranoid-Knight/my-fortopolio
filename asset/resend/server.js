import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();


const pesan = express(); // sekarang tipe-nya Express, ada .use()
pesan.use(cors())
pesan.use(express.json())

const resend = Resend(process.env.)