import PriceList from "../../components/Dashboard/PriceList";

function MainLayout() {
  return (
    <div className="px-4 my-5 mx-auto max-w-screen-xl flex flex-row sm:px-6 lg:px-6">
      <details
        open
        className="overflow-hidden border border-gray-200 w-1/5 rounded"
      >
        <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
          <span className="text-xs font-medium">سلام </span>
        </summary>
        <form action="" className="border-t border-gray-200 lg:border-t-0">
          <fieldset>
            <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
              انتخاب محصول
            </legend>

            <div className="px-5 py-6 space-y-2">
              <div className="flex items-center">
                <input
                  id="toy"
                  type="checkbox"
                  name="type[toy]"
                  className="w-4 h-4 border-gray-300 rounded"
                />

                <label htmlFor="toy" className="mr-3 text-xs font-medium">
                  {" "}
                  Toy{" "}
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="game"
                  type="checkbox"
                  name="type[game]"
                  className="w-4 h-4 border-gray-300 rounded"
                />

                <label htmlFor="game" className="mr-3 text-xs font-medium">
                  {" "}
                  Game{" "}
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="outdoor"
                  type="checkbox"
                  name="type[outdoor]"
                  className="w-4 h-4 border-gray-300 rounded"
                />

                <label htmlFor="outdoor" className="mr-3 text-xs font-medium">
                  Outdoor
                </label>
              </div>

              <div className="pt-2">
                <button type="button" className="text-xs text-gray-500">
                  حذف فیلتر محصولات
                </button>
              </div>
            </div>
          </fieldset>

          <div>
            <fieldset>
              <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                انتخاب کارخانه
              </legend>

              <div className="px-5 py-6 space-y-2">
                <div className="flex items-center">
                  <input
                    id="3+"
                    type="checkbox"
                    name="age[3+]"
                    className="w-4 h-4 border-gray-300 rounded"
                  />

                  <label htmlFor="3+" className="mr-3 text-xs font-medium">
                    {" "}
                    3+{" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="8+"
                    type="checkbox"
                    name="age[8+]"
                    className="w-4 h-4 border-gray-300 rounded"
                  />

                  <label htmlFor="8+" className="mr-3 text-xs font-medium">
                    {" "}
                    8+{" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="12+"
                    type="checkbox"
                    name="age[12+]"
                    className="w-4 h-4 border-gray-300 rounded"
                  />

                  <label htmlFor="12+" className="mr-3 text-xs font-medium">
                    {" "}
                    12+{" "}
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="16+"
                    type="checkbox"
                    name="age[16+]"
                    className="w-4 h-4 border-gray-300 rounded"
                  />

                  <label htmlFor="16+" className="mr-3 text-xs font-medium">
                    {" "}
                    16+{" "}
                  </label>
                </div>

                <div className="pt-2">
                  <button type="button" className="text-xs text-gray-500">
                    حذف فیلتر کارخانه ها
                  </button>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="flex justify-between px-5 py-3 border-t border-gray-200">
            <button
              name="commit"
              type="button"
              className="px-5 py-3 text-xs w-full font-medium text-white bg-blue-600 rounded"
            >
              حذف تمام فیلتر ها
            </button>
          </div>
        </form>
      </details>

      <div className="w-4/5 mr-3">
        <PriceList />
      </div>
    </div>
  );
}

export default MainLayout;
