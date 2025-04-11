import { ApiProperty } from "@nestjs/swagger";

export class CreateInvoiceDto {
    @ApiProperty({
        description: 'Unique identifier for the invoice',
        example: 'INV-123456',
        required: true,
        type: String,
    }) 
    invoiceNumber: string;
    @ApiProperty({
        description: 'Date when the invoice was issued',
        example: '2023-10-01T00:00:00Z',
        required: true,
        type: Date,
    })
    date: Date;
    @ApiProperty({
        description: 'Due date for the invoice payment',
        example: '2023-10-15T00:00:00Z',
        required: true,
        type: Date,
    })
    dueDate: Date;
    @ApiProperty({
        description: 'Name of the customer to whom the invoice is issued',
        example: 'John Doe',
        required: true,
        type: String,
    })
    customerName: string;
    @ApiProperty({
        description: 'About Item',
        example: [
            {
                description: 'Item description',
                quantity: 1,
                unitPrice: 100,
            },
        ],
        required: true,
        type: 'array',
    })
    items: {
        description: string;
        quantity: number;
        unitPrice: number;
    }[];
    @ApiProperty({
        description: 'Total amount for the invoice',
        example: 1500,
        required: true,
        type: Number,
    })
    totalAmount: number;
    status: 'paid' | 'unpaid' | 'overdue';
}