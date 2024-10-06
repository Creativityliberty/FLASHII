import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import db from '@/lib/db';

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const { title, content, contentType } = await req.json();

    const stmt = db.prepare('INSERT INTO posts (title, content, type, authorId) VALUES (?, ?, ?, ?)');
    const result = stmt.run(title, content, contentType, user.id);

    return NextResponse.json({ id: result.lastInsertRowid }, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création du contenu:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const stmt = db.prepare('SELECT * FROM posts WHERE authorId = ? ORDER BY createdAt DESC');
    const posts = stmt.all(user.id);

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Erreur lors de la récupération du contenu:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}