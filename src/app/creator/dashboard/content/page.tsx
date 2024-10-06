"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const contentTypes = ['Post', 'Photo', 'Vidéo', 'Audio'];

export default function CreatorContent() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [contentType, setContentType] = useState('Post');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous implémenteriez la logique pour envoyer le contenu à votre API
    console.log({ title, content, contentType, file });
    // Réinitialiser le formulaire après soumission
    setTitle('');
    setContent('');
    setContentType('Post');
    setFile(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Gérer votre contenu</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Ajouter du nouveau contenu</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titre</label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label htmlFor="content-type" className="block text-sm font-medium text-gray-700">Type de contenu</label>
              <Select value={contentType} onValueChange={setContentType}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un type de contenu" />
                </SelectTrigger>
                <SelectContent>
                  {contentTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">Contenu</label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={4}
              />
            </div>
            
            <div>
              <label htmlFor="file" className="block text-sm font-medium text-gray-700">Fichier (si applicable)</label>
              <Input
                id="file"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            
            <Button type="submit">Publier le contenu</Button>
          </form>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Votre contenu existant</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Ici, vous afficheriez une liste du contenu existant du créateur */}
          <p>Liste du contenu à implémenter...</p>
        </CardContent>
      </Card>
    </div>
  );
}