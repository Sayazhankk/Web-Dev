import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album';

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css'
})
export class Albums implements OnInit {

  private albumService = inject(AlbumService);

  albums = signal<Album[]>([]);
  loading = signal(true);
  error = signal('');

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (albums: Album[]) => {
        this.albums.set(albums);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Fail');
        this.loading.set(false);
      }
    });
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums.set(this.albums().filter(a => a.id !== id));
      },
      error: () => {
        this.error.set('Fail');
      }
    });
  }
}