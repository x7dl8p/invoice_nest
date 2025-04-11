import { ApiProperty } from "@nestjs/swagger";  

export class CreateCostumerDto {
    @ApiProperty({
        description: 'Used name of the costumer',
        example: 'John Doe',
        required: true,
        type: String,
    })
    CostumerName: string;
    @ApiProperty({
        description: 'Mobile of the costumer',
        example: '1234567890',
        required: true,
        type: String,
    })
    userMobile: string;
}