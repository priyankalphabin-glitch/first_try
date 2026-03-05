import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
const contactsFile = path.join(dataDir, 'contacts.json');

export async function GET() {
  try {
    const data = await fs.readFile(contactsFile, 'utf8');
    const contacts = JSON.parse(data);
    return NextResponse.json(contacts);
  } catch (error) {
    console.error('Error reading contacts:', error);
    return NextResponse.json([], { status: 200 }); // Return empty array if file doesn't exist
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, contactNumber } = await request.json();

    // Ensure data directory exists
    await fs.mkdir(dataDir, { recursive: true });

    // Read existing contacts or initialize empty array
    let contacts = [];
    try {
      const data = await fs.readFile(contactsFile, 'utf8');
      contacts = JSON.parse(data);
    } catch (error) {
      // File doesn't exist, contacts remains []
    }

    // Add new contact
    const newContact = { name, email, contactNumber, timestamp: new Date().toISOString() };
    contacts.push(newContact);

    // Write back to file
    await fs.writeFile(contactsFile, JSON.stringify(contacts, null, 2));

    return NextResponse.json({ message: 'Contact submitted successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    return NextResponse.json({ error: 'Failed to save contact' }, { status: 500 });
  }
}