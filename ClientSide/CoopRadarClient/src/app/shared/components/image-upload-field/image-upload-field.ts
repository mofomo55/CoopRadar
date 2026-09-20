import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-image-upload-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-upload-field.html',
  styleUrl: './image-upload-field.css'
})
export class ImageUploadFieldComponent {
  @Input() imagePath: string | null = '/images/default-user.svg';
  @Input() imageTitle = 'Profile image';
  @Input() width: number | string = 180;
  @Input() height: number | string = 180;
  @Input() shape: 'circle' | 'square' = 'circle';
  @Input() defaultImagePath = '/images/default-user.svg';
  @Input() showUploadButton = true;
  @Input() showDeleteButton = true;

  @Output() imageSelected = new EventEmitter<{ file: File; preview: string }>();
  @Output() imageDeleted = new EventEmitter<void>();

  currentImage = '/images/default-user.svg';
  private objectUrl: string | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['imagePath'] || changes['defaultImagePath']) {
      const nextImage =
        this.imagePath && this.imagePath.trim().length > 0 ? this.imagePath : this.defaultImagePath;
      this.setCurrentImage(nextImage);
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      return;
    }

    if (this.objectUrl) {
      URL.revokeObjectURL(this.objectUrl);
    }

    const preview = URL.createObjectURL(file);
    this.objectUrl = preview;
    this.setCurrentImage(preview);
    this.imageSelected.emit({ file, preview });
    input.value = '';
  }

  resetToDefault(): void {
    if (this.objectUrl) {
      URL.revokeObjectURL(this.objectUrl);
      this.objectUrl = null;
    }

    this.setCurrentImage(this.defaultImagePath);
    this.imageDeleted.emit();
  }

  get frameClasses(): Record<string, boolean> {
    return {
      'is-circle': this.shape === 'circle',
      'is-square': this.shape === 'square'
    };
  }

  get containerStyle(): Record<string, string> {
    return {
      width: this.toCssSize(this.width),
      height: this.toCssSize(this.height)
    };
  }

  private setCurrentImage(value: string): void {
    this.currentImage = value || this.defaultImagePath;
  }

  private toCssSize(value: number | string): string {
    return typeof value === 'number' ? `${value}px` : value;
  }
}
