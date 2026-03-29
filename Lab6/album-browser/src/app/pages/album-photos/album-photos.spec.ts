import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Photo } from '../../models/photo';

@Component({
  standalone: true,
  templateUrl: './album-photos.html'
})
export class AlbumPhotos implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumService = inject(AlbumService);

  photos = signal<Photo[]>([]);
  loading = signal(true);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbumPhotos(id)
      .subscribe((photos: Photo[]) => {
        this.photos.set(photos);
        this.loading.set(false);
      });
  }

  back(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigate(['/albums', id]);
  }
}