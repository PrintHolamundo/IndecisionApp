import { shallowMount, mount } from "@vue/test-utils";
import Counter from "@/components/Counter";

describe("Counter Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  // test('debe de hacer match con el snapshot', () => {
  //     const wrapper = shallowMount(Counter)
  //     expect(wrapper.html()).toMatchSnapshot();
  // })

  test('h2 debe tomar el valor por defecto "Counter" ', () => {
    expect(wrapper.find("h2").exists()).toBeTruthy();
    const h2Value = wrapper.find("h2").text();
    expect(h2Value).toBe("Counter");
  });

  test("el valor por defecto debe de ser 100 en el p", () => {
    //Wrapper
    const wrapper = shallowMount(Counter);
    //pTags
    // const pTags = wrapper.findAll('p')
    const value = wrapper.find('[data-testid="counter"]').text();

    // expect segundo p === 100
    // expect(pTags.at(1).text()).toBe('100')
    expect(value).toBe("100");
  });
  test("debe de incrementar y decrementar  en 1 el valor del contador", async () => {
    const [increment, decrement] = wrapper.findAll("button");
    await increment.trigger("click");
    await increment.trigger("click");
    await increment.trigger("click");

    await decrement.trigger("click");
    await decrement.trigger("click");

    const value = wrapper.find('[data-testid="counter"]').text();
    expect(value).toBe("101");
  });

  test("debe de establecer el valor por defecto", async () => {
    const {start} = wrapper.props()
    const value = wrapper.find('[data-testid="counter"]').text();
    expect(Number (value)).toBe(start);

  });

  test("debe de mostrar la prop title", async () => {
    const wrapper = shallowMount(Counter, {props:{title:'Hola Mundo'}})
    expect (wrapper.find('h2').text()).toBe('Hola Mundo')
  })


});
 