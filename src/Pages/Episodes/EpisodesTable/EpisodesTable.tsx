import { FC, useState } from "react";

import { Episodes, Episode } from "@redux/reducers/Episodes";

import Table from "@components/Table";
import TableRow from "@components/Table/TableRow";
import TableHeader from "@components/Table/TableHeader";
import TableData from "@components/Table/TableData";
import { useEffect } from "react";
import { Fragment } from "react";

type EpisodesTableProps = {
  episodes: Episodes;
};

const EpisodeTable: FC<EpisodesTableProps> = ({ episodes }) => {
  const [tableData, setTableData] = useState<Episode[]>();
  useEffect(() => {
    if (episodes.results) {
      setTableData(episodes.results);
    }
  }, [episodes]);
  return (
    <Table>
      <TableRow>
        <TableHeader width={"10rem"}>#</TableHeader>
        <TableHeader>Name</TableHeader>
        <TableHeader>Air date</TableHeader>
      </TableRow>

      <Fragment>
        {tableData?.map((d: Episode) => (
          <TableRow key={d.id}>
            <TableData>{d.id.toString()}</TableData>
            <TableData>{d.name}</TableData>
            <TableData>{d.air_date.toString()}</TableData>
          </TableRow>
        ))}
      </Fragment>
    </Table>
  );
};
export default EpisodeTable;
