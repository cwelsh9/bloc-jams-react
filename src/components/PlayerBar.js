import React, { Component } from 'react';

class PlayerBar extends Component {
  formatTime(time) {
    return this.props.formatTime(time);
  }

  render() {
    return (
      <section className="player-bar">
          <button id="previous" onClick={this.props.handlePrevClick}>
            <span className="ion-skip-backward"></span>
          </button>
          <button id="play-pause" onClick={this.props.handleSongClick} >
            <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
          </button>
          <button id="next" onClick={this.props.handleNextClick}>
            <span className="ion-skip-forward"></span>
          </button>
        <section id="time-control">
          <div className="current-time">{this.formatTime(this.props.currentTime)}</div>
          <input
            type="range"
            className="seek-bar"
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
          />
          <div className="total-time">{this.formatTime(this.props.duration)}</div>
        </section>
        <section id="volume-control">
          <div className="volume-control">{this.props.currentVolume * 100}</div>
          <input
            type="range"
            className="seek-bar"
            volume={1} // in range 0-1
            onChange={this.props.handleVolumeChange}
          />
        </section>
      </section>
      )}
    }

export default PlayerBar;
