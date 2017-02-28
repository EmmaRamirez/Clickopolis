import { connect } from 'react-redux';
import { clickFoodButton } from '../../actions/clickFoodButton';
import { MainButtons } from './MainButtons';

const mapStateToProps = (state) => {
  return {
    state.amount
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFoodButtonClick: (amount) => {
      dispatch(clickFoodButton(amount));
    }
  }
};

export const MainButtonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainButtons);

// export default MainButtonsContainer;
