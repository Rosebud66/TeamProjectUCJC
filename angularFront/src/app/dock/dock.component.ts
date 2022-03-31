import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-tabmenu',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss']
})
export class DockComponent implements OnInit {

  dockItems: MenuItem[] = [];

    ngOnInit() {
        this.dockItems = [
            {
                label: 'Matemáticas',
                icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fsmall-smiley-face-clip-art-free-3.jpg&f=1&nofb=1"
            },
            {
                label: 'Lengua',
                icon: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fdata_images%2F320507.jpg&f=1&nofb=1"
            },
            {
                label: 'Biología',
                icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Ft%2Fsmall-cat-kitten-sitting-green-spring-grass-playing-outdoor-portrait-53720528.jpg&f=1&nofb=1"
            },
        ];

    }
}