import { BaseExternalAccountClient } from "google-auth-library";
import { google } from "googleapis";

// Load client secrets from a file, environment variables, or another source
// See https://developers.google.com/identity for guides on OAuth2
const auth = new google.auth.GoogleAuth({
	scopes: ["https://www.googleapis.com/auth/gmail.settings.basic"],
});

export type GmailClientInstance = ReturnType<typeof google.gmail>;

let client: GmailClientInstance;

const initialize = async () => {
	const authClient = (await auth.getClient()) as BaseExternalAccountClient;
	client = google.gmail({ version: "v1", auth: authClient });
};

export const GmailClient = () => {
	if (!client) {
		throw new Error("Gmail client not initialized");
	}

	return client;
};
