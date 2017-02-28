import { connect } from 'react-redux';
import { clickFoodButton } from '../../actions/clickFoodButton';
import { MainButtons } from './MainButtons';

const mapStateToProps = (state) => {
  return {
    food: {
      total: state.food.total
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (amount) => {
      dispatch(clickFoodButton(amount));
    }
  }
}

export const MainButtonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainButtons);

export default MainButtonsContainer;
