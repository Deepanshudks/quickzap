import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  TextField,
  MenuItem,
} from "@mui/material";
import CustomFilterInput from "Shared/CustomFilterInput";

const rows = [
  {
    ref: "TXN-2025-001234",
    date: "2025-01-15 14:32:07",
    business: "Apex Solutions",
    method: "UPI",
    status: "Success",
    amount: "₹1,250.00",
  },
  {
    ref: "TXN-2025-001235",
    date: "2025-01-15 13:45:22",
    business: "Nova Enterprises",
    method: "Card",
    status: "Pending",
    amount: "₹850.75",
  },
  {
    ref: "TXN-2025-001236",
    date: "2025-01-15 12:18:45",
    business: "Prime Services",
    method: "Net Banking",
    status: "Failed",
    amount: "₹2,100.00",
  },
  {
    ref: "TXN-2025-001236",
    date: "2025-01-15 12:18:45",
    business: "Prime Services",
    method: "Net Banking",
    status: "Failed",
    amount: "₹2,100.00",
  },
  {
    ref: "TXN-2025-001236",
    date: "2025-01-15 12:18:45",
    business: "Prime Services",
    method: "Net Banking",
    status: "Pending",
    amount: "₹2,100.00",
  },
  {
    ref: "TXN-2025-001236",
    date: "2025-01-15 12:18:45",
    business: "Prime Services",
    method: "Net Banking",
    status: "Success",
    amount: "₹2,100.00",
  },
];

const statusColor = (status: string) => {
  switch (status) {
    case "Success":
      return "success";
    case "Pending":
      return "warning";
    case "Failed":
      return "error";
    default:
      return "default";
  }
};

const Transactions = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col justify-between lg:flex-row gap-4">
        <TextField
          size="small"
          placeholder="Search by Business"
          className="w-full lg:w-80"
        />

        <div className="flex gap-3 flex-wrap">
          <CustomFilterInput
            name="fromDate"
            type="date"
            size="small"
            className="w-36!"
            placeholder="Date"
            label="From Date"
          />
          <CustomFilterInput
            name="toDate"
            type="date"
            size="small"
            className="w-36!"
            placeholder="Date"
            label="To Date"
          />

          <TextField
            size="small"
            select
            label="Status"
            defaultValue="All"
            className="w-40"
          >
            <MenuItem value="All">All Status</MenuItem>
            <MenuItem value="Success">Success</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Failed">Failed</MenuItem>
          </TextField>
        </div>
      </div>

      <TableContainer
        component={Paper}
        className="rounded-xl! shadow-sm overflow-x-auto"
      >
        <Table>
          <TableHead>
            <TableRow className="bg-[#EFEFEF]! rounded-md!">
              <TableCell className="font-bold!">
                Transaction Reference
              </TableCell>
              <TableCell className="font-bold! hidden md:table-cell">
                Date & Time
              </TableCell>
              <TableCell className="font-bold!">Business</TableCell>
              <TableCell className="font-bold! hidden lg:table-cell">
                Method
              </TableCell>
              <TableCell className="font-bold!">Status</TableCell>
              <TableCell className="font-bold! text-right">Amount</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.ref} hover>
                <TableCell>{row.ref}</TableCell>

                <TableCell className="hidden md:table-cell">
                  {row.date}
                </TableCell>

                <TableCell>{row.business}</TableCell>

                <TableCell className="hidden lg:table-cell">
                  {row.method}
                </TableCell>

                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusColor(row.status) as any}
                    size="small"
                    className="font-medium"
                  />
                </TableCell>

                <TableCell className="text-right font-medium">
                  {row.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="flex justify-between items-center text-sm text-gray-500">
        <p>Showing 1 to 12 of 247 transactions</p>

        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded-md">Previous</button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded-md">
            1
          </button>
          <button className="px-3 py-1 border rounded-md">2</button>
          <button className="px-3 py-1 border rounded-md">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
