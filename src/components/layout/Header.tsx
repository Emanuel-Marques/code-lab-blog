import SearchInput from "../ui/SearchInput";

export default function Header(){
    return (
        <>
            <header className="bg-dark-20 flex flex-col gap-5 justify-center items-center font-space p-10">
                <h1 className="text-4xl font-bold">Code <span className="text-brand-color">Lab</span> - Blog</h1>
                <SearchInput />
            </header>
        </>
    )
}