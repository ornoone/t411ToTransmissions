import {Page, IonicApp, Platform} from 'ionic-angular';
import {TorrentPage} from '../torrent/torrent'

@Page({
  templateUrl: 'build/pages/getting-started/getting-started.html'
})
export class GettingStartedPage {
  constructor(private app: IonicApp, private platform: Platform) {

  }

  openSearchPage() {
    let nav = this.app.getComponent('nav');
    nav.setRoot(TorrentPage);
  }
}
