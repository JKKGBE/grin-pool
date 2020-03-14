
import { connect } from 'react-redux'
import { GrinPoolStatsTableComponent } from '../../containers/GrinPoolData/GrinPoolStatsTable'
import {
  fetchNetworkData
} from '../actions/networkDataActions.js'

const mapStateToProps = (state) => {
  return {
    historicalNetworkData: state.networkData.historical || [],
    historicalGrinPoolData: state.grinPoolData.historical || [],
    latestBlockHeight: state.networkData.latestBlock.height || 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNetworkData: () => dispatch(fetchNetworkData())
  }
}

export const GrinPoolStatsTableConnector = connect(mapStateToProps, mapDispatchToProps)(GrinPoolStatsTableComponent)
