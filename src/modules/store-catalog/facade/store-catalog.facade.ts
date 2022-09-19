import FindAllProductsUsecase from "../usecase/find-all-products/find-all-products.usecase";
import FindProductUsecase from "../usecase/find-product/find-product.usecase";
import StoreCatalogFacadeInterface, { 
  FindAllStoreCatalogFacadeOutputDto, 
  FindStoreCatalogFacadeInputDto, 
  FindStoreCatalogFacadeOutputDto 
} from "./store-catalog.facade.interface";

export interface UseCasesProps{
  findUseCase: FindProductUsecase;
  findAllUseCase: FindAllProductsUsecase;
}

export default class StoreCatalogFacade implements StoreCatalogFacadeInterface{

  private _findUseCase: any;
  private _findAllUseCase: any;

  constructor(useCasesProps: UseCasesProps){
    this._findUseCase = useCasesProps.findUseCase;
    this._findAllUseCase = useCasesProps.findAllUseCase;
  }

  find(input: FindStoreCatalogFacadeInputDto): Promise<FindStoreCatalogFacadeOutputDto> {
    return this._findUseCase.execute(input);
  }

  findAll(): Promise<FindAllStoreCatalogFacadeOutputDto> {
    return this._findAllUseCase.execute()
  }
}