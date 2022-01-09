import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HammerEvent} from "./directive/hammer.directive";
import {$e} from "@angular/compiler/src/chars";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  private readonly MIN_MAX: number = 90;
  private readonly MIN_LOC: number = 5;
  private readonly BOUND_LOC: number = 50;

  public title = 'FakeBook';

  @ViewChild('rwdSideBarLeft', { static: true })
  public rwdSideBarLeft: ElementRef<HTMLDivElement> | undefined;

  @ViewChild('rwdSideBarRight', { static: true })
  public rwdSideBarRight: ElementRef<HTMLDivElement> | undefined;

  private rawSideBarLocLeft: number = this.MIN_MAX;
  private rawSideBarLocRight: number = this.MIN_MAX;
  private tmpRawSideBarLocLeft: number = this.rawSideBarLocLeft;
  private tmpRawSideBarLocRight: number = this.rawSideBarLocRight;

  public hammerOption: HammerOptions = {
    inputClass: Hammer.TouchMouseInput,
    recognizers: [
      // [Hammer.Swipe, { direction: Hammer.DIRECTION_ALL }],
      // [Hammer.Press, { direction: Hammer.DIRECTION_ALL }],
      [Hammer.Pan, { direction: Hammer.DIRECTION_ALL }],
    ]
  };

  private startX: number = -1;
  private startY: number = -1;
  private startDirection: number = -1;

  ngOnInit(): void {

    if (this.rwdSideBarLeft) {

      this.rwdSideBarLeft.nativeElement.style.right = `${this.rawSideBarLocLeft}%`;
      this.rwdSideBarLeft.nativeElement.style.width = `${100 - this.MIN_LOC}%`;
    }

    if (this.rwdSideBarRight) {

      this.rwdSideBarRight.nativeElement.style.left = `${this.rawSideBarLocRight}%`;
      this.rwdSideBarRight.nativeElement.style.width = `${100 - this.MIN_LOC}%`;
    }
  }

  public pan($event: HammerEvent): void {

    const mouseEvent = ($event.input.pointers[0] as MouseEvent);

    if (this.startDirection == -1) {

      this.startDirection = $event.input.direction;
      this.startX = mouseEvent.x;
      this.startY = mouseEvent.y;
    }

    if (this.startDirection == Hammer.DIRECTION_RIGHT) {

      if (this.rawSideBarLocRight == this.MIN_LOC)
        this.controlRightSideBar($event);
      else
        this.controlLeftSideBar($event);

      // this.controlLeftSideBar($event);
    }
    else if (this.startDirection == Hammer.DIRECTION_LEFT) {

      if (this.rawSideBarLocLeft == this.MIN_LOC)
        this.controlLeftSideBar($event);
      else
        this.controlRightSideBar($event);

      // this.controlRightSideBar($event);
    }

    if ($event.input.isFinal) {

      this.startDirection = -1;
      this.startX = -1;
      this.startY = -1;

      this.alignLeftSideBar(this.tmpRawSideBarLocLeft);
      this.alignRightSideBar(this.tmpRawSideBarLocRight);
    }
  }

  controlLeftSideBar($event: HammerEvent): void {

    let distance = $event.input.deltaX / document.body.clientWidth

    if (this.rwdSideBarLeft) {

      if (this.rwdSideBarLeft && this.rwdSideBarLeft.nativeElement.clientWidth == 0)
        return;

      this.tmpRawSideBarLocLeft = this.rawSideBarLocLeft - (distance * 100);

      if (this.tmpRawSideBarLocLeft < this.MIN_LOC || 100 < this.tmpRawSideBarLocLeft)
        return;

      this.displayLeftSideBarLoc(this.tmpRawSideBarLocLeft);
    }
  }

  controlRightSideBar($event: HammerEvent): void {

    let distance = $event.input.deltaX / document.body.clientWidth;

    if (this.rwdSideBarRight) {

      if (this.rwdSideBarRight && this.rwdSideBarRight.nativeElement.clientWidth == 0)
        return;

      this.tmpRawSideBarLocRight = this.rawSideBarLocRight + (distance * 100);

      if (this.tmpRawSideBarLocRight < this.MIN_LOC || 100 < this.tmpRawSideBarLocRight)
        return;

      this.displayRightSideBarLoc(this.tmpRawSideBarLocRight);
    }
  }

  displayLeftSideBarLoc(loc: number): void {

    if (this.rwdSideBarLeft)
      this.rwdSideBarLeft.nativeElement.style.right = loc + '%';
  }

  alignLeftSideBar(loc: number): void {

    this.rawSideBarLocLeft = loc < this.BOUND_LOC ? this.MIN_LOC : this.MIN_MAX;

    this.displayLeftSideBarLoc(this.rawSideBarLocLeft);
  }

  displayRightSideBarLoc(loc: number): void {

    if (this.rwdSideBarRight)
      this.rwdSideBarRight.nativeElement.style.left = loc + '%';
  }
  alignRightSideBar(loc: number): void {

    this.rawSideBarLocRight = loc < this.BOUND_LOC ? this.MIN_LOC : this.MIN_MAX;

    this.displayRightSideBarLoc(this.rawSideBarLocRight);
  }
}
