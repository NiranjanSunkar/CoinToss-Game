import {Component} from 'react'

import './index.css'
const HeadImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TailsImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImage: HeadImgUrl, HeadCount: 0, TailsCount: 0}
  onClickToss = () => {
    const {HeadCount, TailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadCount = HeadCount
    let latestTailCount = TailsCount

    if (toss === 0) {
      tossImage = HeadImgUrl
      latestHeadCount += 1
    } else {
      tossImage = TailsImgUrl
      latestTailCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      HeadCount: latestHeadCount,
      TailsCount: latestTailCount
    })
  }
  render() {
    const {tossResultImage, HeadCount, TailsCount} = this.state
    const totalCount = HeadCount + TailsCount
    return (
      <div className="bg-container">
        <div className="bg-card">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossResultImage} className="Toss-image" alt="toss result" />
          <div>
            <button type="button" className="btn" onClick={this.onClickToss}>
              Toss Coin
            </button>
          </div>
          <div className="toss-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {HeadCount}</p>
            <p className="count">Tails: {TailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
