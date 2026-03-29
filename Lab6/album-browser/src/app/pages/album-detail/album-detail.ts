import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetail implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumService = inject(AlbumService);

  album = signal<Album | null>(null);
  loading = signal(true);
  error = signal('');

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe({
      next: (album: Album) => {
        this.album.set(album);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Fail');
        this.loading.set(false);
      }
    });
  }

  save(): void {
    const current = this.album();
    if (!current) return;

    const updatedAlbum: Album = { ...current };

    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (response) => {
        this.album.set(response as Album); 
      },
      error: () => {
        this.error.set('Fail');
      }
    });
  }

  back(): void {
    this.router.navigate(['/albums']);
  }
}