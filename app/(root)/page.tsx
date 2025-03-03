import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";

const Home = () => (
  <>
    <BookOverview {...sampleBooks[0]} />
    <BookList
      title="Buku-buku terbaru"
      books={sampleBooks}
      containerClassName="mt-28"
    />
  </>
);

export default Home;
