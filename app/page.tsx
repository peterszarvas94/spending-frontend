import { BiEditAlt } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";
import { LuDollarSign } from "react-icons/lu";

export default function Home() {

  async function submitForm(data: FormData) {
    "use server";
    const description = data.get('description') as string;
    const amountStr = data.get('amount') as string;
    const amount = parseFloat(amountStr);
    const currency = data.get('currency') as string;
    const date = new Date().toISOString();

    console.log(description, amount, currency, date);

  }

  return (
    <main
      className="bg-gray-200 h-screen text-lg"
    >
      <form
        className="flex gap-4 w-full max-w-4xl p-10"
        action={submitForm}
      >
        <input
          className="grow rounded-lg border-none shadow border-2 px-3 py-1 font-bold
          placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400"
          type="text"
          name="description"
          placeholder="description"
          required
        />
        {/* max value int32 */}
        <input
          className="rounded-lg border-none shadow border-2 px-3 py-1 font-bold
          placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400"
          placeholder="0"
          type="number"
          name="amount"
          min={0}
          max={2147483647}
          step={0.01}
          required
        />
        <select
          className="rounded-lg border-none shadow border-2 px-3 py-1 font-bold
          bg-white focus:outline-none focus:ring-1 focus:ring-gray-400"
          name="currency"
          required
          defaultValue={"USD"}
        >
          <option value="USD">USD</option>
          <option value="HUF">HUF</option>
        </select>
        <button
          className="rounded-lg border-none shadow border-2 px-3 py-1 font-bold
          bg-emerald-500 text-white focus:outline-none focus:ring-1 focus:ring-gray-500"
          type="submit"
        >
          Save
        </button>
      </form>

      <section
        className="flex justify-between w-full max-w-4xl p-10"
      >
        <button
          className="rounded-lg bg-white border border-gray-500 px-3 py-1 font-semibold
          focus:outline-none focus:ring-1 focus:ring-gray-400"
        >
          Sort by Date descending (default)
        </button>
        <div
          className="flex gap-4"
        >
          <button
            className="rounded-lg bg-blue-200 text-blue-600 px-3 py-1 font-bold
            focus:outline-none focus:ring-1 focus:ring-gray-400"
          >
            ALL
          </button>
          <button
            className="rounded-lg bg-white px-3 py-1
            focus:outline-none focus:ring-1 focus:ring-gray-400"
          >
            HUF
          </button>
          <button
            className="rounded-lg bg-white px-3 py-1
            focus:outline-none focus:ring-1 focus:ring-gray-400"
          >
            USD
          </button>
        </div>
      </section>

      <ul
        className="flex gap-4 w-full max-w-4xl px-10"
      >
        <li
          className="flex items-center gap-4 p-6 w-full bg-white shadow rounded-lg"
        >
          <div
            className="flex items-center justify-center w-12 h-12 rounded-2xl
            bg-blue-200 text-blue-600 text-3xl"
          >
            <LuDollarSign />
          </div>

          <article
            className="flex flex-col grow"
          >
            <h1
              className="font-bold"
            >
              Mango
            </h1>
            <time
              className="text-gray-500 text-sm"
            >
              9:40 PM - August 09, 2021
            </time>
          </article>

          <div
            className="font-bold"
          >
            $12.00
          </div>

          <div
            className="flex items-center gap-2"
          >
            <button
              className="flex items-center justify-center w-10 h-10 rounded-xl
              bg-gray-200 text-gray-400 text-xl
              focus:outline-none focus:ring-1 focus:ring-gray-400"
            >
              <BiEditAlt />
            </button>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-xl
              bg-gray-200 text-gray-400 text-xl
              focus:outline-none focus:ring-1 focus:ring-gray-400"
            >
              <FaXmark />
            </button>
          </div>

        </li>
      </ul>
    </main>
  )
}
