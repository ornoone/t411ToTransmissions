import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/torrent/torrent.html',
})
export class TorrentPage {
  searchQuery: string;
  items: Array<{name: string, size: number, seeder: number}>;

  constructor() {
    this.searchQuery = '';
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      
    ];
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.value;

    // if the value is an empty string don't filter the items
    if (q.trim() == '') {
      return;
    }

    this.items = this.items.filter((v) => {
      return v.name.toLowerCase().indexOf(q.toLowerCase()) > -1;

    })
  }
}
//
//@Page({
//  templateUrl: 'build/pages/list/list.html'
//})
//export class ListPage {
//  selectedItem: any;
//  icons: string[];
//  items: Array<{title: string, note: string, icon: string}>;
//
//  constructor(private nav: NavController, navParams: NavParams) {
//    // If we navigated to this page, we will have an item available as a nav param
//    this.selectedItem = navParams.get('item');
//
//    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
//    'american-football', 'boat', 'bluetooth', 'build'];
//
//    this.items = [];
//    for(let i = 1; i < 11; i++) {
//      this.items.push({
//        title: 'Item ' + i,
//        note: 'This is item #' + i,
//        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
//      });
//    }
//  }
//
//  itemTapped(event, item) {
//    this.nav.push(ListPage, {
//      item: item
//    });
//  }
//}
