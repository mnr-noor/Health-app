    "use client"
    import {
        Table,
        TableBody,
        TableCaption,
        TableCell,
        TableFooter,
        TableHead,
        TableHeader,
        TableRow,
    } from "@/components/ui/table"
    import { Button } from "@/components/ui/button"
    const invoices = [
        {
        invoice: "David",
        paymentStatus: "144/91- 80 BPM",
        totalAmount: "May 27,2021",
        paymentMethod: "050000000",
        },
        {
        invoice: "Samantha",
        paymentStatus: "152/97- 78 BPM",
        totalAmount: "Jun 13,2020",
        paymentMethod: "0600000000",
        },
        {
        invoice: "Kate",
        paymentStatus: "135/80 -72BPM",
        totalAmount: "Jul 9,2020",
        paymentMethod: "070000000",
        },
        
    ]
    
    export function TableDemo() {
        return (
        <Table>
            {/* <TableCaption>A list of your patients.</TableCaption> */}
            <TableHeader className="rounded-mb">
            <TableRow className="bg-[#dce7fd] ">
                <TableHead className="">Name</TableHead>
                <TableHead>Last measurement</TableHead>
                <TableHead>Last visit</TableHead>
                <TableHead className="text-right">Contact</TableHead>
                <TableHead className="text-right">Modify</TableHead>

            </TableRow>
            </TableHeader>
            <TableBody>
            {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                <TableCell className="text-right">
                <Button className="bg-red-400 mr-5" onClick={() => onDelete(invoice.invoice)}>Delete</Button>
                <Button  className="bg-blue-400"onClick={() => onEdit(invoice.invoice)}>Edit</Button>
            </TableCell>
                </TableRow>
            ))}
            </TableBody>
        
        </Table>
        )
    }
    