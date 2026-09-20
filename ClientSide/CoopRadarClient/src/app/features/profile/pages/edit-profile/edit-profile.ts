import { Component } from '@angular/core';
import { ImageUploadFieldComponent } from '../../../../shared/components/image-upload-field/image-upload-field';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [ImageUploadFieldComponent],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.css'
})
export class EditProfilePage {
  profileImage = '/images/default-user.svg';

  onImageSelected(event: { file: File; preview: string }): void {
    this.profileImage = event.preview;
  }

  onImageDeleted(): void {
    this.profileImage = '/images/default-user.svg';
  }
}
