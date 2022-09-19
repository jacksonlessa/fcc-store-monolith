import UseCaseInterface from "../../../@shared/usecase/use-case.interface";
import ProductRepository from "../../repository/product.repository";
import { CheckStockInputDto, CheckStockOutputDto } from "./check-stock.dto";

export default class CheckStockUseCase implements UseCaseInterface{
  private _productRepository: ProductRepository;

  constructor(productRepository: ProductRepository){
    this._productRepository = productRepository;
  }
  
  async execute(input: CheckStockInputDto): Promise<CheckStockOutputDto> {
    const product = await this._productRepository.find(input.productId)

    return {
      productId: product.id.id,
      stock: product.stock
    }
  }
    
}