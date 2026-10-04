import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

type InformationBoxShape = 'card' | 'square' | 'bar';
type CssSize = number | string;

@Component({
  selector: 'app-information-box',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './information-box.html',
  styleUrl: './information-box.css'
})
export class InformationBoxComponent {
  readonly icon = input('◷');
  readonly iconPath = input<string | null>(null);
  readonly title = input.required<string>();
  readonly text = input.required<string>();
  readonly actionLabel = input('');
  readonly actionLink = input<string | null>(null);
  readonly shape = input<InformationBoxShape>('card');
  readonly width = input<CssSize>('100%');
  readonly height = input<CssSize>('auto');

  readonly widthCss = computed(() => this.toCssSize(this.width()));
  readonly heightCss = computed(() => this.toCssSize(this.height()));

  private toCssSize(value: CssSize): string {
    return typeof value === 'number' ? `${value}px` : value;
  }
}
