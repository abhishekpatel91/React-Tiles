import { connect } from 'react-redux';
import * as actions from './actions';
import TileDetails from '../../components/tileDetails/tileDetails';

const mapStateToProps = (store) => ({ tileDetails: store.details.tileDetails });

const mapDispatchToProps = (dispatch) => ({
    fetchTileDetails: (id) => dispatch(actions.fetchTileDetails(id)),
    postEditedTile: (editedTile) => dispatch(actions.postEditedTile(editedTile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TileDetails);