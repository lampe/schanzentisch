import React, { Component } from 'react';
import 'tachyons'
import Card from './card'
export default class Album extends Component {

  rgb = () => {
    let rgb = []

    for (var i = 0; i < 3; i++) {
      let r = Math.floor(Math.random() * 256)
      rgb.push(r)
    }
    return rgb;
  }

  styles = {
    backgroundColor: `rgb(${this.rgb()})`,
  };

  render = () => (
  <article className="cf">
    <div className="fl w-50 w-25-ns">
      <Card />
    </div>
    <div className="fl w-50 w-25-ns">
      <Card />
    </div>
    <div className="fl w-50 w-25-ns">
      <a
        href="https://www.amazon.com/Woman-2LP-Set-Full-Album/dp/B01LX3E0ET/ref=sr_1_1?s=music&ie=UTF8&qid=1480422119&sr=1-1&keywords=justice&tag=mrmrs01-20"
        className="db aspect-ratio aspect-ratio--1x1 dim">
        <span
          role="img"
          aria-label="Woman - Justice"
          style={this.styles}
          className="bg-center cover aspect-ratio--object"></span>
      </a>
    </div>
    <div className="fl w-50 w-25-ns">
      <a
        href="https://www.amazon.com/Skin-Flume/dp/B01DD5N35W/ref=sr_1_1_twi_lp__3?s=music&ie=UTF8&qid=1480422133&sr=1-1&keywords=flume&tag=mrmrs01-20"
        className="db aspect-ratio aspect-ratio--1x1 dim">
        <span
          role="img"
          aria-label="Skin - Flume"
          style={this.styles}
          className="bg-center cover aspect-ratio--object"></span>
      </a>
    </div>
    <div className="fl w-50">
      <a
        href="https://www.amazon.com/Seat-at-Table-Solange/dp/B01LXP7I5N/ref=sr_tnr_p_1_195429011_1_twi_lp__3?s=music&ie=UTF8&qid=1480422087&sr=1-1&keywords=solange+seat+at+the+table&tag=mrmrs01-20"
        className="db aspect-ratio aspect-ratio--1x1 dim">
        <span
          role="img"
          aria-label="Seat at Table Solange"
          style={this.styles}
          className="bg-center cover aspect-ratio--object"></span>
      </a>
    </div>
    <div className="fl w-50 w-25-ns">
      <a
        href="https://www.amazon.com/untitled-unmastered-LP-Kendrick-Lamar/dp/B01DET9BV2/ref=sr_1_3_twi_lp__3?s=music&ie=UTF8&qid=1480370912&sr=1-3&keywords=kendrick+lamar&tag=mrmrs01-20"
        className="db aspect-ratio aspect-ratio--1x1 dim">
        <span
          role="img"
          aria-label="Untitled Unmastered - Kendrick Lamar"
          style={this.styles}
          className="bg-center cover aspect-ratio--object"></span>
      </a>
    </div>
    <div className="fl w-100 w-25-ns">
      <a
        href="https://www.amazon.com/Moon-Shaped-Pool-2-LP-Download/dp/B01FDF12UI/ref=sr_1_1_twi_lp__3?s=music&ie=UTF8&qid=1480370971&sr=1-1&keywords=moon+shaped+pool&tag=mrmrs01-20"
        className="db aspect-ratio aspect-ratio--1x1 dim">
        <span
          role="img"
          aria-label="Moon Shaped Pool 2"
          style={this.styles}
          className="bg-center cover aspect-ratio--object"></span>
      </a>
    </div>
    <div className="fl w-50 w-25-ns">
      <a
        href="https://www.amazon.com/Colour-Anything-2-LP/dp/B01F8674B8/ref=sr_1_1_twi_lp__3?s=music&ie=UTF8&qid=1480371036&sr=1-1&keywords=color+in+anything&tag=mrmrs01-20"
        className="db aspect-ratio aspect-ratio--1x1 dim">
        <span
          role="img"
          aria-label="Colour Anything 2"
          style={this.styles}
          className="bg-center cover aspect-ratio--object"></span>
      </a>
    </div>
    <div className="fl w-50 w-25-ns">
      <a
        href="https://www.amazon.com/Good-Luck-Do-Your-Best/dp/B01C3IHINI/ref=sr_1_1_twi_lp__3?s=music&ie=UTF8&qid=1480371123&sr=1-1&keywords=good+luck+gold+panda&tag=mrmrs01-20"
        className="db aspect-ratio aspect-ratio--1x1 dim">
        <span
          role="img"
          aria-label="Good Luck Do Your Best"
          style={this.styles}
          className="bg-center cover aspect-ratio--object"></span>
      </a>
    </div>
    <div className="fl w-100 w-50-m w-25-ns">
      <a
        href="https://www.amazon.com/32-Levels-Clams-Casino/dp/B01GU83I4K/ref=sr_1_2_twi_lp__1?s=music&ie=UTF8&qid=1480371183&sr=1-2&keywords=clams+casino&tag=mrmrs01-20"
        className="db aspect-ratio aspect-ratio--1x1 dim">
        <span
          role="img"
          aria-label="32 Levels Clams Casino"
          style={this.styles}
          className="bg-center cover aspect-ratio--object"></span>
      </a>
      <a
        href="https://www.amazon.com/Danny-Brown-Atrocity-Exhibition-Exclusive/dp/B01M9F0LSQ/ref=sr_1_2?ie=UTF8&qid=1480421198&sr=8-2&keywords=danny+brown+vinyl&tag=mrmrs01-20"
        className="db aspect-ratio aspect-ratio--1x1 dim">
        <span
          role="img"
          aria-label="Danny Brown Atrocity Exhibition Exclusive"
          className="bg-center cover aspect-ratio--object"></span>
      </a>
    </div>
    <div className="fl w-100 w-50-m w-25-l">
      <div className="fl w-100">
        <a
          href="https://www.amazon.com/Human-Energy-MACHINEDRUM/dp/B01HC7UTBI/ref=sr_1_1_twi_lp__3?s=music&ie=UTF8&qid=1480371226&sr=1-1&keywords=human+energy&tag=mrmrs01-20"
          className="db aspect-ratio aspect-ratio--1x1 dim">
          <span
            role="img"
            aria-label="Human Energy - Machinedrum"
            className="bg-center cover aspect-ratio--object"></span>
        </a>
      </div>
      <div className="fl w-100">
        <div className="fl w-50">
          <a
            href="https://www.amazon.com/Moodymann-DJ-Kicks-DJ-KICKS/dp/B01AEOM6D0/ref=sr_1_1_twi_lp__3?s=music&ie=UTF8&qid=1480371894&sr=1-1&keywords=dj+kicks+moodymann&tag=mrmrs01-20"
            className="db aspect-ratio aspect-ratio--1x1 dim">
            <span
              role="img"
              aria-label="Moodymann - DJ Kicks"
              className="bg-center cover aspect-ratio--object"></span>
          </a>
        </div>
        <div className="fl w-50">
          <a
            href="https://www.amazon.com/Stranger-Things-Netflix-Original-Soundtrack/dp/B01KA4MVF2/ref=sr_1_1_twi_lp__3?s=music&ie=UTF8&qid=1480423240&sr=1-1&keywords=stranger+things&tag=mrmrs01-20"
            className="db aspect-ratio aspect-ratio--1x1 dim">
            <span
              role="img"
              aria-label="Stranger Things Netflix Original Soundtrack"
              className="bg-center cover aspect-ratio--object"></span>
          </a>
        </div>
        <div className="fl w-50">
          <a
            href="https://www.amazon.com/How-Be-Human-Being-LP/dp/B01GQ7DIJA/ref=tmm_vnl_swatch_0?_encoding=UTF8&qid=1480421224&sr=8-1&tag=mrmrs01-20"
            className="db aspect-ratio aspect-ratio--1x1 dim">
            <span
              role="img"
              aria-label="How Be Human Being LP"
              className="bg-center cover aspect-ratio--object"></span>
          </a>
        </div>
        <div className="fl w-50">
          <a
            href="https://www.amazon.com/22-Million-Bon-Iver/dp/B01KBKVK2K/ref=sr_tnr_p_6_195212011_1_twi_lp__3?s=music&ie=UTF8&qid=1480422776&sr=1-6&tag=mrmrs01-20"
            className="db aspect-ratio aspect-ratio--1x1 dim">
            <span
              role="img"
              aria-label="22 Million - Bon Iver"
              className="bg-center cover aspect-ratio--object"></span>
          </a>
        </div>
      </div>
    </div>
    <div className="fl w-100 w-50-l">
      <a
        href="https://www.amazon.com/Malibu-Anderson-Paak/dp/B01BXNXBAS/ref=sr_1_1_twi_lp__3?s=music&ie=UTF8&qid=1480422041&sr=1-1&keywords=paak&tag=mrmrs01-20"
        className="db aspect-ratio aspect-ratio--1x1 dim">
        <span
          role="img"
          aria-label="Malibu -  Anderson Paak"
          className="bg-center cover aspect-ratio--object"></span>
      </a>
    </div>
  </article>
  )
}