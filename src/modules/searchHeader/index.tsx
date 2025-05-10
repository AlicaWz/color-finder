import './index.css'
import ChipButton from "@library/chip";
import SearchInput from "@library/searchInput";

export type Props = {
    groups: (string | undefined)[]
}
export default function SearchHeader({ groups }: Props) {

    return (
        <section className="searchheader">
            <SearchInput />
            <div className="filter">
                {
                    groups?.map((group, index) => {
                        return (
                            <ChipButton label={group} key={index} />
                        )
                    })
                }
            </div>
        </section>
    )
}