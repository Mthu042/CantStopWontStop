import { AppState } from '@store';
import { connect } from 'react-redux';
import { Authors } from './Authors';
import { StateProps } from './types';

const mapStateToProps = ({ loading }: AppState): StateProps => ({
    isLoading: loading.authors.isLoading
});

export default connect<StateProps, unknown>(mapStateToProps, {})(Authors);
