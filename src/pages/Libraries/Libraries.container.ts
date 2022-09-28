import { AppState } from '@store';
import { connect } from 'react-redux';
import { Libraries } from './Libraries';
import { StateProps } from './types';

const mapStateToProps = ({ loading }: AppState): StateProps => ({
    isLoading: loading.dashboard.isLoading
});

export default connect<StateProps, unknown>(mapStateToProps, {})(Libraries);
