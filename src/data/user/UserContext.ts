export type GmailUserContext
{
	name: string;
	email: string;
	password: string;
	role: string;
	token: string;
	refreshToken: string;
	googleId: string;
	googleToken: string;
	googleRefreshToken: string;
	googleAccessToken: string;
	googleAccessTokenExpire: string;
	googleRefreshTokenExpire: string;
}

export const UserContext: GmailUserContext;
