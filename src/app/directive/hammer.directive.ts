import { Directive, ElementRef, Output, EventEmitter, Input, OnInit, OnDestroy } from '@angular/core';

export interface HammerEvent {
  input: HammerInput;
  elRef: ElementRef;
}

@Directive({
  selector: '[hammerListener]'
})
export class HammerDirective implements OnInit, OnDestroy {

  @Input() hammerAction: string | string[] | undefined;
  @Input() hammerOption: HammerOptions | undefined;
  @Output() onHammer: EventEmitter<HammerEvent>;

  private handler: HammerManager | undefined;

  constructor(public elRef: ElementRef) {

    this.onHammer = new EventEmitter();
  }

  ngOnInit(): void {

    if (!this.hammerAction || !this.hammerOption)
      return;

    this.handler = new Hammer.Manager(this.elRef.nativeElement, this.hammerOption);

    if (typeof this.hammerAction == "string")
      this.registerEvent(this.hammerAction);
    else
      this.hammerAction.forEach(this.registerEvent)
  }


  registerEvent(action: string): void {

    this.handler?.on(action, (hammerEvent) => {

      this.onHammer.emit({
        input: hammerEvent,
        elRef: this.elRef,
      });
    });
  }

  ngOnDestroy(): void {

    this.handler?.destroy();
  }
}
