import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';



@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit{

  constructor(private readonly elementRef: ElementRef,
    private renderer: Renderer2) {
}

ngOnInit() {
  const script = this.renderer.createElement('script');
  script.src = 'https://actionnetwork.org/widgets/v3/form/join-extinction-rebellion-aotearoa-new-zealand-3?format=js&source=widget';
  script.onload = () => {
    console.log('script loaded');    
  };
  // this.renderer.appendChild(this.elementRef.nativeElement, script);
 }

}
