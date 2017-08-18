import { connect } from 'react-redux';
import Loader from '../../components/loader/loader';

const mapStateToProps = (store) => ({ isLoading: store.loader.isLoading });

export default connect(mapStateToProps)(Loader);
