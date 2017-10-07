import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  routes: Object[] = [{
    icon: 'home',
    route: '.',
    title: 'Home',
  }, {
    icon: 'library_books',
    route: '.',
    title: 'Documentation',
  }, {
    icon: 'color_lens',
    route: '.',
    title: 'Style Guide',
  }, {
    icon: 'view_quilt',
    route: '.',
    title: 'Layouts',
  }, {
    icon: 'picture_in_picture',
    route: '.',
    title: 'Components & Addons',
  },
  ];
  usermenu: Object[] = [{
    icon: 'swap_horiz',
    route: '.',
    title: 'Switch account',
  }, {
    icon: 'tune',
    route: '.',
    title: 'Account settings',
  }, {
    icon: 'exit_to_app',
    route: '.',
    title: 'Sign out',
  },
  ];
  constructor() {

  }
}
