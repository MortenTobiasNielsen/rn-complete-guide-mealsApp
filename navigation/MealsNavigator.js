import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeals from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMeals,
    MealDetails: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);