import SearchInput from "../../library/searchInput";

export type Props = {
    groups?: string[]
}
export default function SearchHeader({groups}: Props) {
    console.log("groups", groups)

    return (
        <section>
            <SearchInput />
        </section>
    )
}