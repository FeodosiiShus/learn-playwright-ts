import * as fs from "node:fs";

const filePath = 'emails/emails.txt';

function getEmailsFromTxt(): string[] {
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, 'utf-8')
            .split('\n')
            .map(line => line.trim())
            .filter(line => line !== '');
    } else {
        console.log('There is no file for saved emails, will return empty array');
        return [];
    }
}

export function getRandomEmailFromTxtFile(): string {
    let emails: string[] = getEmailsFromTxt();
    if (emails.length === 0) {
        return "";
    } else {
        return emails[Math.floor(Math.random() * emails.length)];
    }
}

export function addEmailToEmailsTxtFile(email: string): void {
    let normalizedEmail: string = email.trim();
    fs.appendFileSync(filePath, normalizedEmail + '\n', 'utf-8');
}