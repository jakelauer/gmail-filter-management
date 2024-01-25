import { GmailClient } from "../internal/client";

export const createFilter = GmailClient().users.settings.filters.create;
