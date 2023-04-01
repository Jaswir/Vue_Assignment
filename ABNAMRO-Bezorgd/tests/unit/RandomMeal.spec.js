import {mount} from '@vue/test-utils'
import RandomMeal from '../../src/components/RandomMeal'

describe("RandomMeal.vue", () => {

    test("Checks if Random Meal Paragraph contains Random Meal:", () => {

        //Arrange
        const wrapper = mount(RandomMeal)

        //Act, Assert
        expect(wrapper.find('p').exists()).toBe(true)
        expect(wrapper.text()).toContain('Random Meal:')

           
        

    })
})