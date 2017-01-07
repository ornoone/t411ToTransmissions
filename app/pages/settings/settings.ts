import {Page, IonicApp, Platform} from 'ionic-angular';
import {TorrentPage} from '../torrent/torrent'
import {SettingsService, Settings} from "../../services/settings.services";

@Page({
  templateUrl: 'build/pages/getting-started/getting-started.html',
  providers: [SettingsService],
})
export class SettingsPage {
  settings: Settings;
  constructor(private app: IonicApp, private platform: Platform, private settingsservice: SettingsService) {
      settingsservice.getSettings().then((s) => {this.settings = s})
  }

}
