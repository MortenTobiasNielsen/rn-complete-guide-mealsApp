import{createStackNavigator} from "react-navigation-stack"
import{createAppContainer} from "react-navigation"

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealScreen from "../screens/CategoryMeansScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoriesMealScreen,
    MealDetails: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);