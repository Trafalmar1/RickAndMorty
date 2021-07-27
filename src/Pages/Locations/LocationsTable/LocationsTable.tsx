import { FC, useState } from "react";

import { Locations, Location } from "@redux/reducers/Locations";

import TableWrapper from "@components/Table/TableWrapper";
import Table from "@components/Table";
import TableRow from "@components/Table/TableRow";
import TableHeader from "@components/Table/TableHeader";
import TableData from "@components/Table/TableData";
import { useEffect } from "react";
import { Fragment } from "react";

type LocationsTableProps = {
  locations: Locations;
};

const LocationsTable: FC<LocationsTableProps> = ({ locations }) => {
  const [tableData, setTableData] = useState<Location[]>();
  useEffect(() => {
    if (locations.results) {
      setTableData(locations.results);
    }
  }, [locations]);
  return (
    <TableWrapper>
      <Table>
        <TableRow>
          <TableHeader width={"10rem"}>#</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>Type</TableHeader>
          <TableHeader>Dimension</TableHeader>
        </TableRow>

        <Fragment>
          {tableData?.map((d: Location) => (
            <TableRow key={d.id}>
              <TableData>{d.id.toString()}</TableData>
              <TableData>{d.name}</TableData>
              <TableData>{d.type}</TableData>
              <TableData>{d.dimension}</TableData>
            </TableRow>
          ))}
        </Fragment>
      </Table>
    </TableWrapper>
  );
};
export default LocationsTable;
